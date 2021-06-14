document.addEventListener('DOMContentLoaded', () => {
    const newGameForm = document.querySelector('#new-item-form');
    newGameForm.addEventListener('submit', handleNewGameFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewGameFormSubmit = function(event){
    event.preventDefault()
    const gameListItem = createGameListItem(event.target)
    const gameList = document.querySelector('#games-list')
    gameList.appendChild(gameListItem)
    event.target.reset();

}

const createGameListItem = function(event){
    const gameListItem = document.createElement('li');
    gameListItem.classList.add('game-list-item')

    const title = document.createElement('h2')
    title.textContent = event.title.value
    gameListItem.appendChild(title)

    const genre = document.createElement('h3')
    genre.textContent = event.genre.value
    gameListItem.appendChild(genre)

    
    // const rating = document.createElement('h4')
    // rating.textContent = event.rating.value
    // gameListItem.appendChild(rating)
  
    return gameListItem
}
const handleDeleteAllClick = function (event) {
    const gamesList = document.querySelector('#games-list');
    gamesList.innerHTML = '';
}

// const handleNoteInput = function(note) {
//     const noteListItem = CreateNoteListItem(note.target)
//     const noteList = document.querySelector('#note-editor-input')
//     noteList.appendChild(noteListItem)
// }

// const CreateNoteListItem = function(note) {
//     const noteListItem = document.createElement('div')
//     noteListItem.classList.add('note-list-item')

//     const newNote = document.createElement('p')
//     newNote.textContent = note.newNote.value
//     noteListItem.appendChild(newNote)


//     return noteListItem


    // return noteListItem
