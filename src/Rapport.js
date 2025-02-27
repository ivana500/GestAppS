import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importation de Bootstrap
import { Chart } from 'react-chartjs-2'; // Optional: If you want to show charts (graph)
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Enregistrez toutes les échelles et composants nécessaires
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Rapport = () => {
    const [rapportType, setRapportType] = useState(''); // Assiduité, Performances, Financier
    const [reportData, setReportData] = useState(null); // Data for the report

    // Simulated data for reports (replace with actual data)
    const assiduiteData = [
        { name: 'Jean Dupont', presence: 20, absence: 5 },
        { name: 'Marie Lemoine', presence: 18, absence: 7 },
        { name: 'Pierre Martin', presence: 22, absence: 3 },
    ];

    const performancesData = [
        { name: 'Jean Dupont', performance: 85 },
        { name: 'Marie Lemoine', performance: 75 },
        { name: 'Pierre Martin', performance: 90 },
    ];

    const financierData = [
        { name: 'Jean Dupont', montant: 150 },
        { name: 'Marie Lemoine', montant: 200 },
        { name: 'Pierre Martin', montant: 120 },
    ];

    const handleReportChange = (e) => {
        setRapportType(e.target.value);
    };

    const generateReport = () => {
        // Depending on the selected report type, we set the report data
        switch (rapportType) {
            case 'assiduite':
                setReportData(assiduiteData);
                break;
            case 'performances':
                setReportData(performancesData);
                break;
            case 'financier':
                setReportData(financierData);
                break;
            default:
                setReportData(null);
        }
    };

    const chartData = {
        labels: performancesData.map(item => item.name),
        datasets: [
            {
                label: 'Performance (%)',
                data: performancesData.map(item => item.performance),
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    const renderReportTable = () => {
        if (rapportType === 'assiduite') {
            return (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Présences</th>
                            <th>Absences</th>
                            <th>% Présence</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reportData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.presence}</td>
                                <td>{item.absence}</td>
                                <td>{((item.presence / (item.presence + item.absence)) * 100).toFixed(2)}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            );
        } else if (rapportType === 'performances') {
            return (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Performance (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reportData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.performance}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            );
        } else if (rapportType === 'financier') {
            return (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Montant (FCFA)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reportData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.montant} FCFA</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            );
        }
    };

    const renderChart = () => {
        if (rapportType === 'performances') {
            return (
                <Chart
                    key={rapportType} // Change key to force re-mounting of the Chart component
                    type="bar"
                    data={chartData}
                    options={options}
                />
            );
        }
        return null;
    };

    return (
        <div className="container my-5">
            <h1 className="text-center text-bold">Options de Rapport</h1>

            {/* Report Selection Dropdown */}
            <div className="mb-4">
                <label htmlFor="rapportType" className="form-label">Choisir un Rapport</label>
                <select className="form-select" id="rapportType" value={rapportType} onChange={handleReportChange}>
                    <option value="">Sélectionner un type de rapport</option>
                    <option value="assiduite">Assiduité</option>
                    <option value="performances">Performances</option>
                    <option value="financier">Financier</option>
                </select>
            </div>

            {/* Generate Report Button */}
            <button className="btn btn-primary mb-4" onClick={generateReport}>
                Générer Rapport
            </button>

            {/* Render Report Data (Table or Chart) */}
            {reportData && (
                <div>
                    {renderReportTable()}
                    {renderChart()}
                </div>
            )}

            {/* Fallback message if no report is selected */}
            {!reportData && rapportType && <p>Aucun rapport à afficher. Veuillez générer un rapport.</p>}
        </div>
    );
};

export default Rapport;
