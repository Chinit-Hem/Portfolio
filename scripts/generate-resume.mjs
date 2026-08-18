import fs from 'node:fs';
import path from 'node:path';
import PDFDocument from 'pdfkit';

const projectRoot = process.cwd();
const resume = JSON.parse(fs.readFileSync(path.join(projectRoot, 'data/resume.json'), 'utf8'));
const outputDirectory = path.join(projectRoot, 'output/pdf');
const publicDirectory = path.join(projectRoot, 'public');
const outputPath = path.join(outputDirectory, 'Hem-Chinit-Resume.pdf');
const publicPath = path.join(publicDirectory, 'resume.pdf');
const profileImagePath = path.join(publicDirectory, 'profile/hem-chinit.png');

fs.mkdirSync(outputDirectory, { recursive: true });

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 40, right: 42, bottom: 40, left: 42 },
  bufferPages: true,
  info: {
    Title: 'Hem Chinit - Resume',
    Author: 'Hem Chinit',
    Subject: 'IT Executive and Full-Stack Developer Resume',
  },
});

const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

const colors = {
  ink: '#18211d',
  muted: '#5f6f66',
  green: '#176b4d',
  rule: '#cbd8d0',
};
const contentWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;
const photoWidth = 62;
const photoHeight = 76;
const photoX = doc.page.width - doc.page.margins.right - photoWidth;
const headerWidth = contentWidth - photoWidth - 14;

function rule(color = colors.rule, width = 0.7) {
  doc.moveTo(doc.page.margins.left, doc.y)
    .lineTo(doc.page.width - doc.page.margins.right, doc.y)
    .lineWidth(width)
    .strokeColor(color)
    .stroke();
}

function sectionTitle(title) {
  doc.moveDown(0.62);
  doc.font('Helvetica-Bold').fontSize(10.2).fillColor(colors.green).text(title.toUpperCase(), { characterSpacing: 0.5 });
  doc.moveDown(0.22);
  rule(colors.green, 0.8);
  doc.moveDown(0.45);
}

function bullet(text) {
  const x = doc.page.margins.left;
  const y = doc.y;
  doc.font('Helvetica').fontSize(8.8).fillColor(colors.ink).text('•', x, y, { width: 10 });
  doc.text(text, x + 11, y, { width: contentWidth - 11, lineGap: 1.4 });
  doc.moveDown(0.16);
}

function role(item) {
  const y = doc.y;
  doc.font('Helvetica-Bold').fontSize(9.8).fillColor(colors.ink).text(item.title, doc.page.margins.left, y, { continued: true });
  doc.font('Helvetica').fillColor(colors.muted).text(` | ${item.company}`);
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor(colors.muted).text(item.period, doc.page.margins.left, y, {
    width: contentWidth,
    align: 'right',
  });
  doc.y = Math.max(doc.y, y + 12);
  doc.moveDown(0.28);
  item.bullets.forEach(bullet);
  doc.moveDown(0.24);
}

const headerY = doc.y;

doc.save();
doc.roundedRect(photoX, headerY, photoWidth, photoHeight, 3).clip();
doc.image(profileImagePath, photoX, headerY, {
  cover: [photoWidth, photoHeight],
  align: 'center',
  valign: 'top',
});
doc.restore();
doc.roundedRect(photoX, headerY, photoWidth, photoHeight, 3)
  .lineWidth(0.7)
  .strokeColor(colors.rule)
  .stroke();

doc.font('Helvetica-Bold').fontSize(26).fillColor(colors.ink).text(resume.name, { width: headerWidth });
doc.moveDown(0.08);
doc.font('Helvetica-Bold').fontSize(12).fillColor(colors.green).text(resume.title, { width: headerWidth });
doc.moveDown(0.35);
doc.font('Helvetica').fontSize(8.4).fillColor(colors.muted).text(
  `${resume.location}  |  ${resume.email}  |  ${resume.phone}  |  Telegram: ${resume.telegram}`,
  { width: headerWidth, lineGap: 1.2 }
);
doc.text(resume.linkedin, {
  width: headerWidth,
  link: `https://${resume.linkedin}`,
  underline: false,
  continued: true,
});
doc.text('  |  ', { continued: true });
doc.text(resume.github, { link: `https://${resume.github}`, underline: false });
doc.y = Math.max(doc.y, headerY + photoHeight);
doc.moveDown(0.62);
rule(colors.green, 1.5);

sectionTitle('Professional Summary');
doc.font('Helvetica').fontSize(9.2).fillColor(colors.ink).text(resume.summary, { lineGap: 1.8 });

sectionTitle('Professional Experience');
resume.experience.forEach(role);

sectionTitle('Selected Systems');
resume.projects.forEach((project) => {
  doc.font('Helvetica-Bold').fontSize(9.2).fillColor(colors.ink).text(project.name, { continued: true });
  doc.font('Helvetica').fontSize(8.2).fillColor(colors.green).text(`  |  ${project.technology}`);
  doc.font('Helvetica').fontSize(8.7).fillColor(colors.ink).text(project.description, { lineGap: 1.3 });
  doc.moveDown(0.3);
});

sectionTitle('Education');
const educationY = doc.y;
doc.font('Helvetica-Bold').fontSize(9.6).fillColor(colors.ink).text(resume.education.school, { continued: true });
doc.font('Helvetica').fillColor(colors.muted).text(` | ${resume.education.degree}`);
doc.font('Helvetica-Bold').fontSize(8.5).fillColor(colors.muted).text(resume.education.period, doc.page.margins.left, educationY, {
  width: contentWidth,
  align: 'right',
});
doc.font('Helvetica').fontSize(8.7).fillColor(colors.ink).text(`GPA: ${resume.education.gpa}`);
resume.education.highlights.forEach(bullet);

sectionTitle('Skills');
resume.skills.forEach((group) => {
  const y = doc.y;
  doc.font('Helvetica-Bold').fontSize(8.7).fillColor(colors.ink).text(group.label, doc.page.margins.left, y, { width: 94 });
  doc.font('Helvetica').fontSize(8.7).text(group.items, doc.page.margins.left + 96, y, { width: contentWidth - 96, lineGap: 1 });
  doc.moveDown(0.2);
});

const pageRange = doc.bufferedPageRange();
if (pageRange.count !== 1) {
  throw new Error(`Resume must fit on one page; generated ${pageRange.count} pages.`);
}

doc.end();

stream.on('finish', () => {
  fs.copyFileSync(outputPath, publicPath);
  console.log(`Generated ${outputPath}`);
  console.log(`Copied ${publicPath}`);
});
