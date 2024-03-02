import { createContext, useEffect, useState } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch"
import {format} from "date-fns"
import axios from "axios";


const DataContext = createContext({})

export const DataProvider = ({children})=>{
    const {notes,proteinData,carboData,fatData,fiberData,vitaminData,mineralData,bgwInitialPlan,bgwPostPlan,blwInitialPlan,blwPostPlan,igwInitialPlan,igwPostPlan,ilwInitialPlan,ilwPostPlan,agwInitialPlan,agwPostPlan,alwInitialPlan,alwPostPlan,
        isLoading,fetchError} = useAxiosFetch();

    const [note, setNote] = useState([]);
    const [newNote, setNewNote] = useState([]); 
    const[protein, setProtein] = useState([])
    const[carbohydrates, setCarbohydrates] = useState([])
    const[fat, setFat] = useState([])
    const[fiber, setFiber] = useState([])
    const[Vitamin, setVitamin] = useState([])
    const[mineral, setMineral] = useState([])
    const[bgwIP, setBgwIP]= useState([])
    const[bgwPP, setBgwPP]= useState([])
    const[blwIP, setBlwIP]= useState([])
    const[blwPP, setBlwPP]= useState([])
    const[igwIP, setIgwIP]= useState([])
    const[igwPP, setIgwPP]= useState([])
    const[ilwIP, setIlwIP]= useState([])
    const[ilwPP, setIlwPP]= useState([])
    const[agwIP, setAgwIP]= useState([])
    const[agwPP, setAgwPP]= useState([])
    const[alwIP, setAlwIP]= useState([])
    const[alwPP, setAlwPP]= useState([])
    


    

    useEffect(()=>{
        setNote(notes)
           setProtein(proteinData)
           setCarbohydrates(carboData)
           setFat(fatData)
           setFiber(fiberData)
           setMineral(mineralData)
           setVitamin(vitaminData)
           setBgwIP(bgwInitialPlan)
           setBgwPP(bgwPostPlan)
           setBlwIP(blwInitialPlan)
           setBlwPP(blwPostPlan)
           setIgwIP(igwInitialPlan)
           setIgwPP(igwPostPlan)
           setIlwIP(ilwInitialPlan)
           setIlwPP(ilwPostPlan)
           setAgwIP(agwInitialPlan)
           setAgwPP(agwPostPlan)
           setAlwIP(alwInitialPlan)
           setAlwPP(alwPostPlan)

    },[notes,proteinData, carboData,fatData,fiberData,mineralData,vitaminData,bgwInitialPlan,bgwPostPlan,blwInitialPlan,blwPostPlan,igwInitialPlan,igwPostPlan,ilwInitialPlan,ilwPostPlan,agwInitialPlan,agwPostPlan,alwInitialPlan,alwPostPlan])
    // console.log(note)

    const handleNotes = async(e)=>{
        e.preventDefault();

        const lastNote = note[note.length - 1];
        const id = lastNote ? parseInt(lastNote.id, 10) + 1 : 1;
        const datetime = format(new Date(), 'MMMM dd yyyy pp');
        const newPost = {id, note: newNote, datetime };
        try{
          const response = await axios.post('http://localhost:3500/Notes', newPost);
            const allPost = [...note, response.data]
            setNote(allPost)
            setNewNote("");
        }catch(err){
            console.log(`Error: ${err.message}`);
        }
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3500/Notes/${id}`);
          const postList = note.filter((note) => note.id !== id);
          setNote(postList);
        } catch (err) {
          if (err.response) {
            // Not in the 200 responses range
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
          } else {
            console.log(`Error: ${err.message}`);
          }
        }
      };
      
    


    return(
        <DataContext.Provider value={{ note,newNote,setNewNote,handleNotes,handleDelete,protein,carbohydrates,fat,fiber,mineral,Vitamin,isLoading,fetchError,bgwIP,bgwPP,blwIP,blwPP,igwIP,igwPP,ilwIP,ilwPP,agwIP,agwPP,alwIP,alwPP}}>
            {children}
        </DataContext.Provider>
    )

}

export default DataContext