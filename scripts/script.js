// MARK: Variabelen
const erfgenamenSection = document.querySelector(".erfgenamen")
const erfgenamen = document.querySelectorAll(".erfgename")
const eersteErfgename = document.querySelector(".erfgename")
const addButton = document.querySelector(".erfgenamen button")
const anchorToPersonsPage = document.querySelector("a")

let i = 1

// MARK: Displays veranderen
erfgenamen.forEach((erfgename) => {
    if (erfgename !== eersteErfgename){
        erfgename.classList.add("hide-js")
        addButton.style.display = "block"  // https://stackoverflow.com/questions/72462390/how-to-change-an-attribute-value-in-css-through-js
    }
})
anchorToPersonsPage.style.display = "none"


// MARK: Personen toevoegen
addButton.addEventListener("click", insertPerson)

function insertPerson() {
    i++
    console.log(i)
	let personHTML = `<fieldset class="erfgename toegevoegd">
                        <legend>Persoon ${i}</legend>
                        <button type="button" aria-label="Erfgename ${i} verwijderen" class="remove">
                            <span></span>
                            <span></span>
                        </button>
                        <label for="erfgename-${i}-bsn"> BSN overledene
                            <input type="text" id="erfgename-${i}-bsn" name="erfgename-${i}-bsn" pattern="[0-9]{8,9}">
                        </label>
                        <label for="erfgename-${i}-letters"> Voorletter(s)
                            <input type="text" id="erfgename-${i}-letters" name="erfgename-${i}-letters" pattern="([A-Z]\.)+" >
                        </label>
                        <label for="erfgename-${i}-tussenvoegsels"> Tussenvoegsel(s)
                            <input type="text" id="erfgename-${i}-tussenvoegsels" name="erfgename-${i}-tussenvoegsels" pattern="[A-Za-z' ]+" >
                        </label>
                        <label for="erfgename-${i}-achternaam"> Achternaam
                            <input type="text" id="erfgename-${i}-achternaam" name="erfgename-${i}-achternaam" pattern="[A-Z][a-z]+">
                        </label>
                        <fieldset>
                            <legend>Krijgt deze erfgename waarvoor u geen aangifte doet het hele vermogen?</legend>                        
                            <label for="erfgename-${i}-radio-een-yes"> Ja
                                <input type="radio" id="erfgename-${i}-radio-een-yes" name="erfgename-${i}-radio-een" >
                            </label>
                            <label for="erfgename-${i}-radio-een-no"> Nee
                                <input type="radio" id="erfgename-${i}-radio-een-no" name="erfgename-${i}-radio-een">
                            </label>
                        </fieldset>
                        <fieldset>
                            <legend>Doet deze verkrijger een beroep op diens legitieme portie (wettelijke erfdeel)?</legend>                        
                            <label for="erfgename-${i}-radio-twee-yes"> Ja
                                <input type="radio" id="erfgename-${i}-radio-twee-yes" name="erfgename-${i}-radio-twee" >
                            </label>
                            <label for="erfgename-${i}-radio-twee-no"> Nee
                                <input type="radio" id="erfgename-${i}-radio-twee-no" name="erfgename-${i}-radio-twee">
                            </label>
                        </fieldset>
                    </fieldset>`
	addButton.insertAdjacentHTML("beforebegin", personHTML);
    const lastAdded = document.querySelector(".toegevoegd:last-of-type")
    lastAdded.style.display = "grid"
};


erfgenamenSection.addEventListener("click", (e) => {
    const removeButton = e.target.closest(".remove") //https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
    if (!removeButton) return

    const erfgenameFieldset = removeButton.closest(".erfgename")
    if (!erfgenameFieldset) return

    removeErfgename(erfgenameFieldset)
    i--
})

function removeErfgename(erfgename) {
    erfgename.style.display = "none"
}

