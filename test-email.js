const nodemailer = require('nodemailer');

async function testEmail() {
  console.log('Testing SMTP connection and email sending...\n');

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "sveats.cyberdetox.in",
      port: 465,
      secure: true,
      auth: {
        user: "info@sveats.cyberdetox.in",
        pass: "Neelarani@10",
      },
    });

    console.log('✓ Transporter created');

    // Verify connection
    await transporter.verify();
    console.log('✓ SMTP connection verified\n');

    // Send test email
    const info = await transporter.sendMail({
      from: '"ReelFace Website Test" <info@sveats.cyberdetox.in>',
      to: "pittisunilkumar3@gmail.com",
      subject: "Test Email from ReelFace - Email System Working ✓",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #EF4444 0%, #9333EA 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .success { background: #d1fae5; border: 2px solid #10b981; padding: 20px; border-radius: 8px; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎥 ReelFace</h1>
              <h2>Email System Test</h2>
            </div>
            <div class="content">
              <div class="success">
                <h2 style="color: #059669; margin: 0;">✓ Success!</h2>
                <p style="margin: 10px 0 0 0;">Your email system is working correctly.</p>
              </div>
              <p style="margin-top: 20px;">This is a test email to confirm that:</p>
              <ul>
                <li>SMTP connection is working</li>
                <li>Email credentials are correct</li>
                <li>Emails are being delivered successfully</li>
              </ul>
              <p style="margin-top: 20px;">The contact form on your ReelFace website is now fully functional!</p>
              <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb; text-align: center; color: #6b7280;">
                <p>Test sent at: ${new Date().toLocaleString()}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
ReelFace Email System Test

✓ Success! Your email system is working correctly.

This is a test email to confirm that:
- SMTP connection is working
- Email credentials are correct
- Emails are being delivered successfully

The contact form on your ReelFace website is now fully functional!

Test sent at: ${new Date().toLocaleString()}
      `,
    });

    console.log('✓ Test email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('\n🎉 All tests passed! Email system is working correctly.\n');
    console.log('Check pittisunilkumar3@gmail.com for the test email.');

  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.code) {
      console.error('Error code:', error.code);
    }
    process.exit(1);
  }
}

testEmail();
