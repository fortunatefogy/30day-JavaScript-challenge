const chat = document.getElementById("_chat");
const jokeBtn = document.getElementById("jokeBtn");

generateJoke();

jokeBtn.addEventListener("click", generateJoke);

async function generateJoke() {
    jokeBtn.disabled = true;

    const message = createMessageElement("Hey Robot, tell me a joke?");
    appendMessage(message);

    const joke = createMessageElement();
    setElementContent(joke, '<i class="fa-solid fa-ellipsis"></i>');
    appendMessage(joke);

    try {
        const res = await fetch("https://icanhazdadjoke.com", {
            headers: {
                Accept: "application/json",
            },
        });

        if (res.ok) {
            const data = await res.json();
            console.log(data);
            setElementContent(joke, data.joke);
        } else {
            setElementContent(joke, "Oops! Couldn't fetch a joke right now.");
        }
    } catch (error) {
        console.error("Error fetching joke:", error);
        setElementContent(joke, "Something went wrong. Please try again.");
    } finally {
        jokeBtn.disabled = false;
    }
}

function createMessageElement(content) {
    const element = document.createElement("div");
    element.classList.add("message");
    if (content) {
        element.classList.add("response");
        setElementContent(element, content);
    } else {
        element.classList.add("joke");
    }
    return element;
}

function setElementContent(element, content) {
    element.innerHTML = content;
}

function appendMessage(element) {
    chat.appendChild(element);
}
