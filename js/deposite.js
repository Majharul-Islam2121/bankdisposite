
document.getElementById('deposite-btn').addEventListener('click',function(){
    const depositeField = document.getElementById('deposite-site')
    const newDepositeAmountStrong=depositeField.value
    const total_Amount = parseFloat(newDepositeAmountStrong)
    
    const depositeTotalElement=document.getElementById('doller-btn')
    const depositeTotalString=depositeTotalElement.innerText
    const depositeTotal =parseFloat(depositeTotalString )
    //                                  
    const currentTotal = total_Amount + depositeTotal
    depositeTotalElement.innerText=currentTotal
    
    const balanceTotal = document.getElementById('balance')
    const balanceNew = balanceTotal.innerText
    const balanceSome = parseFloat(balanceNew)
    console.log({balanceSome})
    const balanceTotalAmount =balanceSome+currentTotal
    balanceTotal.innerText=balanceTotalAmount
    
    
    depositeField.value=''
    })
    const balanceTotal = document.getElementById('balance')
    const balanceNew=balanceTotal.innerText
    const balanceSome =parseFloat(balanceNew)
    const balanceTotalAmount = balanceSome + currentTotal
    balanceTotal.innerText=balanceTotalAmount
      
    depositeField.value=''