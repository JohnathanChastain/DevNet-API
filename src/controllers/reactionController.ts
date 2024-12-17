import { Request, Response } from 'express';
import Reaction from '../models/reaction';
import Thought from '../models/thought';

// Add reaction to a thought
export const addReaction = async (req: Request, res: Response) => {
    try {
        const { thoughtId } = req.params;
        const reaction = await Reaction.create(req.body);
        const updatedThought = await Thought.findByIdAndUpdate(
            thoughtId,
            { $push: { reactions: reaction._id } },
            { new: true }
        );
        res.status(200).json(updatedThought);
    } catch (error) {
        res.status(500).json({ message: 'Failed to add reaction', error });
    }
};

// Remove reaction from a thought
export const removeReaction = async (req: Request, res: Response) => {
    try {
        const { thoughtId, reactionId } = req.params;
        await Reaction.findByIdAndDelete(reactionId);
        const updatedThought = await Thought.findByIdAndUpdate(
            thoughtId,
            { $pull: { reactions: reactionId } },
            { new: true }
        );
        res.status(200).json(updatedThought);
    } catch (error) {
        res.status(500).json({ message: 'Failed to remove reaction', error });
    }
};