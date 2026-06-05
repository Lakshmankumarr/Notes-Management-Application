const titleInput =
document.getElementById("title");

const contentInput =
document.getElementById("content");

const addBtn =
document.getElementById("addBtn");

const notesContainer =
document.getElementById("notesContainer");

let notes =
JSON.parse(
    localStorage.getItem("notes")
) || [];

function saveNotes()
{
    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );
}

function renderNotes()
{
    notesContainer.innerHTML = "";

    notes.forEach((note,index) => {

        const div =
        document.createElement("div");

        div.classList.add("note");

        div.innerHTML = `
            <h3>${note.title}</h3>

            <p>${note.content}</p>

            <button
                onclick="deleteNote(${index})"
            >
                Delete
            </button>
        `;

        notesContainer.appendChild(div);
    });

}

function deleteNote(index)
{
    notes =
    notes.filter(
        (_,i) => i !== index
    );

    saveNotes();
    renderNotes();
}

addBtn.addEventListener("click", () => {

    const title =
    titleInput.value.trim();

    const content =
    contentInput.value.trim();

    if(title === "" || content === "")
    {
        alert("Please fill all fields");
        return;
    }

    notes.push({
        title,
        content
    });

    saveNotes();
    renderNotes();

    titleInput.value = "";
    contentInput.value = "";
});

renderNotes();