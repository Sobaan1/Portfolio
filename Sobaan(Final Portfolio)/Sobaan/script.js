
    let menuIcon = document.querySelector('menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };



    // scroll section active links

    let sections = document.querySelectorAll('section');
    let navlinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navlinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            };
        });
    };


    // contact form
    function sendMail(event) {
        event.preventDefault();
        // Prepare the data for sending
        var templateParams = {
          name: document.getElementById("fullName").value,
          email: document.getElementById("email").value,
          subject: document.getElementById("subject").value,
          message: document.getElementById("message").value,
          number: document.getElementById("number").value,
        };
        var serviceID = 'service_zhsj8as';
        var templateID = 'template_b71eh8i';
      
        // Send the form using email.js
        emailjs.send(serviceID, templateID, templateParams)
          .then(function (response) {
            console.log('SUCCESS!', response);
            // You can display a success message to the user here
            alert("Your message sent");
            // Clear the form fields
            document.getElementById("fullName").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
          })
          .catch(function (error) {
            console.log('FAILED...', error);
            // You can display an error message to the user here
            alert("Something went wrong!");
          });
      }
