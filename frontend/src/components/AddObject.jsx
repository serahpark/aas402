import { useState } from 'react'
import '../styling/AddObject.css'

const Form = () => {
    const [transcription1, setTranscription1] = useState('')
    const [transcription2, setTranscription2] = useState('')
    const [links, setLinks] = useState('')

    const handleT1Change = (event) => {
        setTranscription1(event.target.value)
    }

    const handleT2Change = (event) => {
        setTranscription2(event.target.value)
    }

    const handleLinkChange = (event) => {
        setLinks(event.target.value)
    }

    return (
        <div className='object-form'>
            <form onSubmit={() => alert('Object submission will be available with the implementation of the backend.')}>
                <div className='label'>transcription 1:</div>
                <input value={transcription1} onChange={handleT1Change} className='text-input' />
                <div className='label'>transcription 2:</div>
                <input value={transcription2} onChange={handleT2Change} className='text-input' />
                <div className='label'>links:</div>
                <input value={links} onChange={handleLinkChange} className='text-input' />
                <button type="submit">add object!</button>
            </form>
        </div>
    )
}

const AddObject = ({ onClick }) => {
    const [activeNew, setActiveNew] = useState(false)
    
    const handleNewClick = () => {
        setActiveNew(!activeNew)
    }

    return (
        <div 
            className='new-card'
            onClick={onClick}
        >
            <div className='new-text' onClick={handleNewClick}>+</div>
            <div>{activeNew && (
                <Form />
            )}
            </div>
        </div>
    )
}
export default AddObject