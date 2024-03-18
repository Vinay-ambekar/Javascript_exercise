let inputs = document.querySelectorAll('input');
let spans = document.querySelectorAll('span');
//console.log(inputs)
let validations = [
    { message:'*Please enter a proper name', pattern:/^[a-zA-Z]{4,15}$/ ,mss1:'*please fill the name'},
    { message:'*Please enter a proper Employe ID', pattern:/^[A-z]{3}[0-9]{4}$/ ,mss1:'*Please fill the Employee ID'},
    { message:'*min 10k max 1cr', pattern:/^[1-9][0-9]{4,8}$/ ,mss1:'*please fill the Basic Salary'},
    { message:'*Dearness allowance between 1000to 999 ', pattern:/^[1-9][0-9]{3}$/ ,mss1:'*Please fill the Dearness Allowance'},
    { message:'*house rent between 10k to 40k', pattern:/^[1-4][0-9]{4}$/ ,mss1:'*Please fill the House Rent Allowance'},
    { message:'*conveyance 1k to 5k', pattern:/^[1-5][0-9]{3}$/ ,mss1:'*Please fill the conveyance Allowance'},
    { message:'*Medical allowance between 1k to 5K', pattern:/^[1-5][0-9]{3}$/ ,mss1:'*Please fill the Medical Allowance'},
    { message:'*pecial allowane 1k to 999', pattern:/^[1-9][0-9]{3}$/ ,mss1:'*Please fill the special Allowance'},
    { message:'*In percentage  100to 999', pattern:/^[1-9][0-9]{2}$/ ,mss1:'*Please fill the Professional Tax'},
    { message:'*In percentage 1k to 9999 ', pattern:/^[1-9][0-9]{3}$/ ,mss1:'*Please fill the Tax Deducted source'},
    { message:'*In percentage 1k to 5k', pattern:/^[1-5][0-9]{3}$/ ,mss1:'*Please fill the Employee Provident Fund'}
   
];


document.getElementById('form_salary').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;
    let values = {};

    inputs.forEach((input, index) => {
        if (input.value.trim() === '') {
            spans[index].textContent = validations[index].mss1;
            isValid = false;
        } else if (!validations[index].pattern.test(input.value.trim())) {
            spans[index].textContent = validations[index].message;
            isValid = false;
        } else {
            input.style.borderColor = 'green';
            values[input.name] = input.value.trim();
             spans[index].textContent = ''; // You can remove this line as it's not needed
        }
    });

    if (isValid) {
        //console.log(values);
        let total_deduction=(parseInt(values.PT)+parseInt(values.TDS)+parseInt(values.PF))
        let total_gross_=parseInt(values.BS)+parseInt(values.DA)+parseInt(values.HRA)+parseInt(values.CA)+parseInt(values.MA)+parseInt(values.SA)
        let net_salary=total_gross_-total_deduction
        document.getElementById('form_inputs').innerHTML = `
        <div class="container">
            <h2>name:${values.name}</h2>
            <h2>ID:${values.ID}</h2>
            <div class="two_tables">
                <div class="table1">
                    <table>
                        <tr>
                            <th colspan="3">Earnings</th>
                        </tr>
                        <tr>
                            <th>serial No.</th>
                            <th>Salary Head</th>
                            <th>Amout (Rs.)</th>
                        </tr>
                        <tbody>
                            <tr>
                                <td>1.</td>
                                <td>Basic Allowance</td>
                                <td>${values.BS}</td>   
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td>Dearness Allowance</td>
                                <td>${values.DA}</td>
                            </tr>

                            <tr>
                                <td>3.</td>
                                <td>House Rent Allowance</td>
                                <td>${values.HRA}</td>
                            </tr>
                            <tr>
                                <td>4.</td>
                                <td>Conveyance Allowance</td>
                                <td>${values.CA}</td>
                            </tr>
                            <tr>
                                <td>5.</td>
                                <td>Medical Allowance</td>
                                <td>${values.MA}</td>
                            </tr>
                            <tr>
                                <td>6.</td>
                                <td>Special Allowance</td>
                                <td>${values.SA}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="table2">
                    <table>
                        <tr>
                            <th colspan="3">deduction</th>
                        </tr>
                        <tr>
                            <th>serial Nm=o.</th>
                            <th>Salary Head</th>
                            <th>Amout(rs.)</th>
                        </tr>
                        <tbody>
                            <tr>
                                <td>1.</td>
                                <td>Professional Tax</td>
                                <td>${values.PT}</td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td>Tax Deducted tax</td>
                                <td>${values.TDS}</td>
                            </tr>
                            <tr>
                                <td>3.</td>
                                <td>Employee Provident Fund</td>
                                <td>${values.PF}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            <h3>Gross Salary:${total_gross_}</h3>
            <h3>total Deduction:${total_deduction}</h3>
            <h3>Net Salary:${net_salary}</h3>
          </div>  
        `;
    }
});



