import Modal from "../Components/Modal"
import { useState } from "react"

function PetsCard(props: any) {
  const [isOpen, setisOpen] = useState(false)
  const toggleModal = () => setisOpen(!isOpen)
  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-2xl mt-20 m-5"
      onClick={() => toggleModal()}
    >
      <img
        className="w-full h-64 object-cover transform duration-500 hover:scale-110"
        src={props.image}
        alt={props.breed}
      />
      <div className="px-6 py-4">
        <span className="inline-block px-2 py-1 leading-none bg-yellow-400 text-yellow-900 rounded-full font-semibold uppercase tracking-wide text-xs mb-2">
          {props.breed}
        </span>
        <p className="lg:text-base text-sm">{props.age}</p>
        <p className="lg:text-base text-sm">{props.description}</p>
      </div>
      <Modal open={isOpen} onClose={() => toggleModal()}></Modal>
    </div>
  )
}
export default PetsCard
