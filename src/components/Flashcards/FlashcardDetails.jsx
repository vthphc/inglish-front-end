import React, { useState, useEffect } from "react";
import { getFlashcardById } from "../../api/flashcards/flashcards";

export default function FlashcardDetails(props) {
    const [data, setData] = useState();
    const [phonetics, setPhonetics] = useState([]);
    useEffect(() => {
        const fetchFlashcard = async () => {
            const res = await getFlashcardById(props.id);
            setData(res);
            setPhonetics(res?.phonetics ?? []);
        };
        fetchFlashcard();
    }, []);
    return (
        <div>
            <dialog id={props.id} className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Topic: {data?.topic}</h3>
                    <div className=" my-4 w-full text-right">
                        <p className="text-5xl font-bold tracking-wider">
                            {data?.word}
                        </p>
                        <span className="italic font-bold">
                            {data?.category}
                        </span>
                    </div>
                    <div className="divider"></div>
                    <p className="mb-4">
                        <span className="font-bold text-2xl">Definition:</span>
                        <br />
                        {data?.definition}
                    </p>
                    <p className="mb-4">
                        <span className="font-bold text-2xl">Example:</span>{" "}
                        <br />
                        {data?.example}
                    </p>
                    {phonetics.length > 0 ? (
                        <p className="font-bold text-2xl">Pronunciation:</p>
                    ) : (
                        <></>
                    )}
                    {phonetics.map((phonetic, index) => (
                        <div key={index}>
                            <p className="italic font-bold">{phonetic.text}</p>
                            {phonetic.audio ? (
                                <div className="flex justify-center w-full">
                                    <audio controls>
                                        <source
                                            src={phonetic.audio}
                                            type="audio/mpeg"
                                        />
                                    </audio>
                                </div>
                            ) : (
                                <></>
                            )}
                        </div>
                    ))}
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
}
