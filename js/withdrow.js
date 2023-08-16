document.getElementById('withdrow-btn').addEventListener('click',function(){

    const withdrowSite=document.getElementById('withdrow-site')
    const withdrowTotal = withdrowSite.value
    const newWithdrow =parseFloat(withdrowTotal)
    
    const btnWithdrow= document.getElementById('btn-Withdrow')
    const newBtnWithdrow = btnWithdrow.innerText
    const totalWithdrow =parseFloat(newBtnWithdrow)
    console.log({newWithdrow,totalWithdrow})
    const total_withdrow =newWithdrow + totalWithdrow
    btnWithdrow.innerText=total_withdrow
    
    
    const total_balance= document.getElementById('balance')
    const balance_total =total_balance.innerText
    
    const parseFloat_total =parseFloat(balance_total)
    
    const total_Balance=parseFloat_total - newWithdrow
    total_balance.innerText=total_Balance
    console.log(total_Balance)
    total_balance.value=''
    })