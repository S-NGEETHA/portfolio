<script>
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
      .then(() => {
        alert('Message sent successfully!');
        this.reset(); // Clear the form
      }, (error) => {
        alert('Failed to send message. Please try again later.');
        console.error(error);
      });
  });
</script>
