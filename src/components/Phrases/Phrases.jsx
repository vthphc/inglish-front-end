import React from "react";
import { getPhrasesApiByUserId } from "../../api/phrases/phrases";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import PhraseCard from "./PhraseCard";

export default function Phrases() {
    const [loading, setLoading] = React.useState(false);
    const { auth } = React.useContext(AuthContext);
    const [phrases, setPhrases] = React.useState([]);

    React.useEffect(() => {
        const fetchPhrases = async () => {
            setLoading(true);
            const res = await getPhrasesApiByUserId(auth.user.userId);
            setPhrases(res.reverse());
            setLoading(false);
        };
        fetchPhrases();

        console.log("Phrases: ", phrases);
    }, []);

    return (
        <div>
            {loading === true ? (
                <div
                    style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <span className="loading loading-spinner loading-lg text-purple-700"></span>
                </div>
            ) : (
                <div className="sm:mx-24 md:mx-40 lg:mx-60 flex flex-col sm:grid md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-4 ">
                    {phrases.map((phrase) => (
                        <PhraseCard key={phrase._id} phrase={phrase} />
                    ))}
                </div>
            )}
        </div>
    );
}
