// Function to display medications based on the selected disease
function showMedications(disease) {
    let info = '';
    switch(disease) {
        case 'disease1':
            info = `<h3>Medication for Disease 1</h3>
                    <p>Information about medications for Disease 1...</p>`;
            break;
        case 'disease2':
            info = `<h3>Medication for Disease 2</h3>
                    <p>Information about medications for Disease 2...</p>`;
            break;
        default:
            info = `<p>Please select a valid disease.</p>`;
            break;
    }
    document.getElementById('medication-info').innerHTML = info;
}

// Function to display tips based on the selected issue
function showTip(tip) {
    let info = '';
    switch(tip) {
        case 'missed-dose':
            info = `<h3>Missed Dose</h3>
                    <p>If you miss a dose of your medication...</p>`;
            break;
        case 'overdose':
            info = `<h3>Overdose</h3>
                    <p>If you accidentally take more medication than prescribed...</p>`;
            break;
        default:
            info = `<p>Please select a valid issue.</p>`;
            break;
    }
    document.getElementById('tip-info').innerHTML = info;
}
