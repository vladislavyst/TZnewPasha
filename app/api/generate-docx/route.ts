import { NextRequest, NextResponse } from 'next/server';
import { Document, Packer, Paragraph, HeadingLevel } from 'docx';
import { sections } from '@/lib/questions';
import { TestResults } from '@/lib/types';

export async function POST(request: NextRequest) {
  try {
    const results: TestResults = await request.json();

    const children: Paragraph[] = [];

    // Заголовок
    children.push(
      new Paragraph({
        text: 'ТЕХНИЧЕСКОЕ ЗАДАНИЕ',
        heading: HeadingLevel.HEADING_1,
        spacing: { after: 400 },
      })
    );

    children.push(
      new Paragraph({
        text: `Дата создания: ${new Date().toLocaleDateString('ru-RU')}`,
        spacing: { after: 400 },
      })
    );

    sections.forEach((section, sectionIndex) => {
      children.push(
        new Paragraph({
          text: `${sectionIndex + 1}. ${section.title}`,
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 400, after: 200 },
        })
      );

      children.push(
        new Paragraph({
          text: section.description,
          spacing: { after: 400 },
        })
      );

      section.questions.forEach((question) => {
        const answer = results[question.id];
        if (answer && answer.selectedAnswers.length > 0) {
          children.push(
            new Paragraph({
              text: question.text,
              heading: HeadingLevel.HEADING_3,
              spacing: { before: 200, after: 200 },
            })
          );

          answer.selectedAnswers.forEach((answerId) => {
            const ans = question.answers.find((a) => a.id === answerId);
            if (ans) {
              children.push(
                new Paragraph({
                  text: `• ${ans.text}`,
                  bullet: { level: 0 },
                  spacing: { after: 100 },
                })
              );
            }
          });

          if (answer.comment) {
            children.push(
              new Paragraph({
                text: `Комментарий: ${answer.comment}`,
                spacing: { before: 200, after: 200 },
              })
            );
          }
        }
      });
    });

    const doc = new Document({
      sections: [
        {
          children,
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'Content-Disposition': `attachment; filename="ТЗ_${new Date().toISOString().split('T')[0]}.docx"`,
      },
    });
  } catch (error) {
    console.error('Ошибка при генерации DOCX:', error);
    return NextResponse.json(
      { error: 'Ошибка при генерации документа' },
      { status: 500 }
    );
  }
}
