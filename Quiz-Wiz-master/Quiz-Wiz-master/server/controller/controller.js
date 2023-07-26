import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js"
import questions , {answers} from '../database/data.js'




export async function getQuestions(req, res){
    try {
        const q = await Questions.find()
        res.json(q)
    } catch (error) {
        res.json({error})
    }
}


export async function insertQuestions(req, res){
    try {
        await Questions.insertMany({ questions, answers });
        res.json({ msg: "Data Saved Successfully...!" });
    } catch (error) {
        res.json({ error })
    }
}


export async function dropQuestions(req, res){
    try {
        await Questions.deleteMany()
        res.json({msg : "questions api DROP requests"});
    } catch (error) {
        
    }
}


export async function getresults(req, res){
    try {
        const r = await Results.find()
        res.json(r)
        
    } catch (error) {
        res.json({error})
    }
}


export async function storeResults(req, res){
    try {
        const {username , result , attempts , points , achived} = req.body;
        if (!username && !result) throw new Error("Data not provided")
        
        Results.create({username , result , attempts , points , achived})

        res.json({ msg: "Result Saved Successfully...!" });
    } catch (error) {
        res.json({error})
    }
}


export async function dropresults(req, res){
    try {
        await Results.deleteMany()

        res.json({ msg: "Result deleted Successfully...!" });
        
    } catch (error) {
        res.json({error})
    }
    
}