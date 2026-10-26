import { useState } from 'react'
import Accordion from './Accordion'
import Modal from './Modal'
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main className="page">
      <h1>Exemple d'accessibilité</h1>

      <Accordion title="Premier volet">
        <p>Contenu du premier panneau accordéon.</p>
      </Accordion>

      <Accordion title="Deuxième volet">
        <p>Contenu du deuxième panneau accordéon.</p>
      </Accordion>

      <button onClick={() => setIsModalOpen(true)}>Ouvrir la modale</button>

      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </main>
  )
}

export default App
