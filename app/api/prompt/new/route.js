import  { connectToBD } from '@utils/database'
import Prompt from '@models/prompt'

export const POST = async (req, res) => {
    const { userId, prompt, tag } = req.json()

    try {
        await connectToBD();
        const newPrompt = newPrompt ({
            creator: userId,
            prompt,
            tag
        })

        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt)), {status:201}
    } catch (error) {
        return new Response('Failed to post this Prompt', {status:500})
    }

}