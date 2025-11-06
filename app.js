let filterInput = document.getElementById("myInput");
let table = document.getElementById("myTable");

function filterTable() {
    let rows = table.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {

        let td = rows[i].getElementsByTagName("td")[0];

        if (td) {
            let txtValue = td.textContent || td.innerText;

            if (txtValue.toLowerCase().indexOf(filterInput.value.toLowerCase()) !== -1) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    }
}








// function myFunction() {

//     let input = document.getElementById("myInput");
//     let filter = input.value.toUpperCase();
//     let table = document.getElementById("myTable");
//     tr = table.getElementsByTagName("tr");

//     for (i = 0; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td")[0];
//         if (td) {
//             txtValue = td.textContent || td.innerText;
//             if (txtValue.toUpperCase().indexOf(filter) > -1) {
//                 tr[i].style.display = "";
//             } else {
//                 tr[i].style.display = "none";
//             }
//         }
//     }
// }