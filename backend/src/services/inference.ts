import { OpenAI } from "langchain/llms/openai";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import 'dotenv/config'
import { loadQAStuffChain } from "langchain/chains";

export async function execute({ path, question }: { path: string, question: string }): Promise<string> {
    let document = new PDFLoader(path)

    const model = new OpenAI({
        modelName: "text-davinci-003",
        temperature: 0
    });
    const chainA = loadQAStuffChain(model);

    const docs = await document.loadAndSplit()

    const response = await chainA.call({
        input_documents: docs,
        question: question,
    });
    return response?.text

}

