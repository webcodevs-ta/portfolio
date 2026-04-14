const form = document.getElementById("contactForm");
        const successMsg = document.getElementById("successMsg");

        form.addEventListener("submit", async function (e) {
            e.preventDefault();

            const data = new FormData(form);

            const response = await fetch(form.action, {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                successMsg.style.display = "block";
                form.reset();
            } else {
                alert("❌ Something went wrong!");
            }
        });