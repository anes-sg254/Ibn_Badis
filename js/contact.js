////////////////////////////////////////////////////////////////////////
//Contact us

function buildHTMLTemplateMessage(data) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Lilita+One&family=Noto+Kufi+Arabic:wght@100;200;300;400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <header>
      <div class="logo">
        <img src="https://drive.google.com/file/d/1SJej1X4wx_fLsONLmx0wIF3R8dt46p9m/view?usp=drive_link" alt="logo" />
      </div>
      <div class="titre">New message</div>
      <style>
        header {
          background-color: #115e59;
          /* font-family: "Noto Kufi Arabic", sans-serif; */
          color: aliceblue;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding-top: 20px;
          padding-bottom: 20px;
          gap: 1vw;
          font-weight: 600;
          font-size: 1.2rem;
        }
        .logo img {
          height: 4vw;
          width: 5vw;
        }
      </style>
    </header>
    <main>
      <table>
        <tbody width="50vw">
          <tr>
            <td>Name</td>
            <td>${data.name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>${data.email}</td>
          </tr>
          <tr>
            <td>Phone number</td>
            <td>${data.phone}</td>
          </tr>
          <tr>
            <td>Message</td>
            <td>${data.message}</td>
          </tr>
        </tbody>
      </table>
    </main>

    <style>
      main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      main table {
        margin-top: 4rem;
        border: 2px;
      }

      main table tbody td {
        width: 30vw;
        height: 3.2rem;
      }
    </style>
  </body>
</html>
`;
}

document
  .getElementById("btn_contact-us")
  .addEventListener("click", function () {
    const forms = document.querySelectorAll(".item_input");
    const name = forms[0].value;
    const email = forms[1].value;
    const phone = forms[2].value;
    const message = forms[3].value;

    const data = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };

    console.log(data);

    fetch("http://localhost:3000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "adelbereksi1@gmail.com",
        subject: "New Contact",
        message: buildHTMLTemplateMessage(data),
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  });
