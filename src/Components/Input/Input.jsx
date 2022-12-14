import InputTable from "./InputTable";

export default function Input(){
    return(
        <section className="form">
        <div className="d-md-flex align-items-start pt-2 mb-4">
            <label for="inputWeight" className="mb-3 label"> How much weight do you want to LOSE? </label>
            <input id="inputWeight" type="text" className="input" />
        </div>
        <div className="inputTableContainer mb-4">
            <label className="mb-3 label"> How serious are you, on a scale of 1 to 10? (1: Not so serious / 10: So serious)</label>
            <InputTable />
        </div>
        <div className="d-md-flex align-items-start pt-2 mb-4">
            <label for="inputSeriousness" className="mb-3 label"> What other programs/products have you tried in the past? </label>
            <input id="inputSeriousness" type="text" className="input" />
        </div>
        <div className="d-md-flex align-items-start pt-2 mb-4">
            <label for="inputWeightLoss" className="mb-3 label"> Why do you feel that these other program(s) did not work? </label>
            <input id="inputWeightLoss" type="text" className="input" />
        </div>
        <div className="d-md-flex align-items-start pt-2 mb-4">
            <label for="inputWeightLoss" className="mb-3 label">If we put a plan that is going to help you achieve your goals, how soon would you want to start?</label>
            <input id="inputWeightLoss" type="text" className="input" />
        </div>
        <div className="d-md-flex align-items-start pt-2 mb-4">
            <label for="inputPhone" className="mb-3 mb-md-1 label"> Phone Number </label>
            
            <span className="d-inline-flex flex-column phoneAreaInput">
                <input id="inputPhone" type="text" className="inputForPhone" />
                <p style={{fontSize:"10px"}} className="mb-0">Area Code</p>
            </span>
            <span className="d-none d-md-inline mx-2"> - </span>
            <span className="d-inline-flex flex-column phoneInput">
                <input id="inputPhone" type="text" className="inputForPhone" />
                <p style={{fontSize:"10px"}} className="mb-0">Phone Number</p>
            </span>
        </div>
        <div className="d-md-flex align-items-start pt-2 mb-4">
            <label for="inputEmail" className="label mb-3"> Email </label>
            <span>
                <input id="inputEmail" type="email" className="input" />
                <p style={{fontSize:"10px"}} className="email">example@example.com</p>
            </span>
        </div>
        </section>
    )
}