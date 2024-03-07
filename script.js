// Plán předplatného


const selectPlan = (planNumber) => {
    const plan = document.getElementById(planNumber)
    plan.classList.add("plan--selected")

    let plan1 = document.getElementById("plan1")
    let plan2 = document.getElementById("plan2")
    let plan3 = document.getElementById("plan3")
    
    
    if(planNumber === "plan1"){
        plan2.classList.remove("plan--selected")
        plan3.classList.remove("plan--selected")
        return planNumber

    } else if (planNumber === "plan2"){
        plan1.classList.remove("plan--selected")
        plan3.classList.remove("plan--selected")
        return planNumber

    } else if(planNumber === "plan3"){
        plan1.classList.remove("plan--selected")
        plan2.classList.remove("plan--selected")
        return planNumber
    } 
}
 
selectPlan("plan2")


/* 
ŘEŠENÍ:

1. Vytvořila jsem funkci s jedním parametrem.  Tento parametr jsem uložila do proměnné plan. V této proměnné jsme specifikovala element id, který představuje vstupního hodnotu funkce (argument).
2. Parametru jsem následně přiřadila třídu plan--selected, na základě, které se bude měnit výběr na stránce.
3. Vytvořila jsem 3 proměnné (plan1, plan2 a plan3), do kterých jsem uložila element id. 
4. Potom jsem vytvořila podmínku se třemi větvemi, kde se opakuje stejný postup pro různé id. Pokud se vstupní funkce (planNumber) rovná jednomu z id, tak se u dvou ostatních zruší třída (plan--selected).
5. Nakonec jsme funkci vyvolala. :) 

PS: Chtěla jsem do podmínky přidat ještě jednu větev, která by dokázala rozeznat, že byla funkce zavolána více než jednou a na základě této podmínky, by se na stránce zobrazil text: "Vyberte pouze jeden plán!", ale nevím, jak takovou podmínku vytvořit.
 
*/
