import { Request, Response } from 'express';
import Thought from '../models/thought';

export const getThoughts = async (_: Request, res: Response) => {
    try {
        const thoughts = await Thought.find();
        res.status(200).json(thoughts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching thoughts', error });
    }
};

export const getThoughtById = async (req: Request, res: Response) => {
    try {
        const thought = await Thought.findById(req.params.id);
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        return res.status(200).json(thought);
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching thought', error });
    }
};

export const createThought = async (req: Request, res: Response) => {
    try {
        const newThought = new Thought(req.body);
        const savedThought = await newThought.save();
        res.status(201).json(savedThought);
    } catch (error) {
        res.status(500).json({ message: 'Error creating thought', error });
    }
};

export const updateThought = async (req: Request, res: Response) => {
    try {
        const updatedThought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedThought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        return res.status(200).json(updatedThought);
    } catch (error) {
        return res.status(500).json({ message: 'Error updating thought', error });
    }
};

export const deleteThought = async (req: Request, res: Response) => {
    try {
        const deletedThought = await Thought.findByIdAndDelete(req.params.id);
        if (!deletedThought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        return res.status(200).json({ message: 'Thought deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Error deleting thought', error });
    }
};