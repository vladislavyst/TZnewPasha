import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { email, tz } = await request.json();

    if (!email || !tz) {
      return NextResponse.json(
        { error: 'Email и ТЗ обязательны' },
        { status: 400 }
      );
    }

    // Получение настроек SMTP из переменных окружения
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || '587');
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const smtpFrom = process.env.SMTP_FROM || smtpUser;

    if (!smtpHost || !smtpUser || !smtpPassword) {
      return NextResponse.json(
        { error: 'SMTP настройки не настроены. Проверьте переменные окружения.' },
        { status: 500 }
      );
    }

    // Создание транспорта для отправки email
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true для 465, false для других портов
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    // Отправка email
    await transporter.sendMail({
      from: smtpFrom,
      to: email,
      subject: 'Техническое задание',
      text: tz,
      html: `<pre style="white-space: pre-wrap; font-family: monospace;">${tz.replace(/\n/g, '<br>')}</pre>`,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Ошибка отправки email:', error);
    return NextResponse.json(
      { error: error.message || 'Ошибка отправки email' },
      { status: 500 }
    );
  }
}
