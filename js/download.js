function downloadStudentData() {
    // Sample data to be downloaded
    const students = [
        { id: 'PRE2209', name: 'SHAKTHIMAN', class: '10 A', dob: '2 Feb 2002', parent: 'ARIYAM', mobile: '091 92584 XXX0', address: '12 west,INDIA' },
        { id: 'P22188', name: 'MALLAR', class: '8 A', dob: '3 June 2000', parent: 'N MALLAR', mobile: '242 362 3100', address: 'Rd P.O. Box N-4880, INDIA' },
        // Add more student data as needed
    ];

    // Convert data to CSV format
    const csvContent = "data:text/csv;charset=utf-8," 
        + students.map(e => Object.values(e).join(",")).join("\n");

    // Create a link element
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "students_data.csv");
    document.body.appendChild(link); // Required for Firefox

    // Programmatically click the link to trigger the download
    link.click();
    document.body.removeChild(link); // Clean up
}
