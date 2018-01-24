function formatCell(value) {
    if(value && value!= 'undefined' && typeof value == 'object') {
        try{
            //select crns.sp_add_claim_master_object ('100001', 'Raoul Duke', 'Doctor Gonzo', '1/1/2010', '12/31/2016')
            return moment(value).calendar()
        } catch(e){
            return value.toString()
        }
    }else if(typeof value == 'number') {
        return value.toString();
    }else if(typeof value == 'string') {
        return value
    }else if(typeof value === 'undefined') {
        return ''
    }else if(value === null) {
        console.log('this is null');
        return ''
    }
    return value
}
