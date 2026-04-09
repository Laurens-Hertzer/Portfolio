import Projekt from '../Projekt.jsx';
import gitImg from "../../assets/screenshots/git-tree_gitTrainingRepo.png"

export default function Git_training_repo() {
    return (
        <Projekt
            contain
            title="Git Training"
            description="Ein Repository zum Erlernen von Git und GitFlow -- korrektes Committen, Merges, Merge-Konflikte und Patches."
            technologies={["Git", "GitFlow"]}
            images={[gitImg]}
            githubLink="https://github.com/laurens-hertzer/git-training"
            backLink="/persProjekte"
        >
            <div className="mb-4">
                <h4>Projektziel</h4>
                <p>
                    Ziel war es, den professionellen Umgang mit Git zu erlernen und zu üben.
                    Dazu gehörte nicht nur das korrekte Committen, sondern auch der Umgang
                    mit Branches, Merges und typischen Problemen wie Merge-Konflikten.
                </p>
            </div>

            <div className="mb-4">
                <h4>Was ich gelernt habe</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <strong>Commit-Konvention:</strong> Sinnvolle Commit-Nachrichten mit Präfixen wie feat, fix, refactor, docs
                    </li>
                    <li className="list-group-item">
                        <strong>GitFlow:</strong> Arbeiten mit main, dev und feature-Branches
                    </li>
                    <li className="list-group-item">
                        <strong>Merges:</strong> Branches zusammenführen und Merge-Konflikte lösen
                    </li>
                    <li className="list-group-item">
                        <strong>Patches:</strong> Commits als Patch-Dateien exportieren und importieren
                    </li>
                    <li className="list-group-item">
                        <strong>Rebase:</strong> Commit-Historie sauber halten mit interaktivem Rebase
                    </li>
                </ul>
            </div>
        </Projekt>
    );
}