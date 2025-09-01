import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacts.html',
  styleUrls: ['./contacts.css']
})
export class Contacts {
  imageURL = 'assets/IMG_20250501_103015_874.jpg';

  // Contact Form
  name: string = '';
  emailInput: string = '';
  message: string = '';

  profilePhoto: string = 'assets/your-photo.jpg';
  email: string = 'izzabelle.folio@gmail.com';

  // Social Media Cards
  socials = [
    { name: 'Facebook', color: 'linear-gradient(135deg, #1877F2 0%, #3b5998 33%, #4e69a2 66%, #8b9dc3 100%)', icon: 'fab fa-facebook', description: 'Follow me or Add me on Facebook to see my latest updates and posts.', link: 'https://www.facebook.com/belleoved' },
    { name: 'Instagram', color: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285AEB 90%)', icon: 'fab fa-instagram', description: 'Catch my creative side on Instagram through stories and posts.', link: 'https://www.instagram.com/ivxomints' },
    { name: 'GitHub', color: 'linear-gradient(135deg, #333333 0%, #555555 33%, #777777 66%, #999999 100%)', icon: 'fab fa-github', description: 'Check out my projects and contributions on GitHub.', link: 'https://github.com/izzabellefolio' },
    { name: 'LinkedIn', color: 'linear-gradient(135deg, #0A66C2 0%, #004182 33%, #0066b2 66%, #66a6ff 100%)', icon: 'fab fa-linkedin', description: 'Let’s connect professionally on LinkedIn and grow together.', link: 'https://www.linkedin.com/in/izza-belle-53b928379/'},
    { name: 'TikTok', color: 'linear-gradient(135deg, #010101 0%, #ff0050 33%, #00f2ea 66%, #8a2be2 100%)', icon: 'fab fa-tiktok', description: 'Watch fun, creative, and short-form content on my TikTok.', link: 'https://www.tiktok.com/@ivxomints' },
    { name: 'YouTube', color: 'linear-gradient(135deg, #FF0000 0%, #cc0000 33%, #ff4d4d 66%, #ff8080 100%)', icon: 'fab fa-youtube', description: 'Subscribe to my channel for videos, projects, and vlogs.', link: 'https://www.youtube.com/@ivxomints' }
  ];

  // EmailJS Credentials (replace with your own from EmailJS dashboard)
  private serviceID: string = 'service_r2vcxcc';
  private templateID_me: string = 'template_emt3csg';  // 📩 You get this one
  private templateID_user: string = 'template_g66ufbk'; // 📩 User gets this one
  private publicKey: string = 'l9_vqgl_nUQeXTKmg';

  emailSent = false;

  // Send email via EmailJS
  sendEmail() {
    if (this.name && this.emailInput && this.message) {
      const templateParams = {
        from_name: this.name,
        reply_to: this.emailInput,
        message: this.message
      };

      // 1. Send notification email to YOU
      emailjs
        .send(this.serviceID, this.templateID_me, templateParams, this.publicKey)
        .then((response: EmailJSResponseStatus) => {
          console.log('📩 Notification sent to you!', response.status, response.text);
        })
        .catch((error) => {
          console.error('FAILED sending to me...', error);
        });

      // 2. Send confirmation email to USER
      emailjs
        .send(this.serviceID, this.templateID_user, templateParams, this.publicKey)
        .then((response: EmailJSResponseStatus) => {
          console.log('📩 Confirmation sent to user!', response.status, response.text);
          alert('Message sent successfully! ✅ Please check your email for confirmation.');

          // Reset form after both emails sent
          this.name = '';
          this.emailInput = '';
          this.message = '';
        })
        .catch((error) => {
          console.error('FAILED sending to user...', error);
          alert('Failed to send confirmation. Please try again ❌');
        });

    } else {
      alert('⚠️ Please fill out all fields.');
    }
  }
}
// Note: Remember to replace the EmailJS credentials with your actual IDs from the EmailJS dashboard.