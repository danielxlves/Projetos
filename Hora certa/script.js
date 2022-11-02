function getDayWeek(dia){

    let diaDaSemana;
    
    switch(dia){
        case 0:
            diaDaSemana = 'Domingo';
        return diaDaSemana;
        case 1:
            diaDaSemana = 'Segunda-feira';
        return diaDaSemana;
        case 2:
            diaDaSemana = 'Terça-feira';
        return diaDaSemana;
        case 3:
            diaDaSemana= 'Quarta-feira';
        return diaDaSemana;
        case 4:
            diaDaSemana = 'Quinta-feira';
        return diaDaSemana;
        case 5:
            diaDaSemana = 'Sexta-feira';
        return diaDaSemana;
        case 6:
            diaDaSemana = 'Sabádo';
        return diaDaSemana;
        default:
            diaDaSemana = '';
    }
    }
    

    
    function getMonthYear(month){

        let months;
        
        switch(month){
            case 0:
                months = 'Janeiro';
            return months;
            case 1:
                months = 'Fevereiro';
            return months;

            case 2:
                months = 'Março';
            return months;

            case 3:
                months = 'Abril';
            return months;

            case 4:
                months = 'Maio';
            return months;

            case 5:
                months = 'Junho';
            return months;

            case 6:
                months = 'Julho';
            return months;

            case 6:
                months = 'Julho';
            return months;

            case 7:
                months = 'Agosto';
            return months;

            case 8:
                months = 'Setembro';
            return months;

            case 9:
                months = 'Outubro';
            return months;

            case 10:
                months = 'Novembro';
            return months;

            case 11:
                months = 'Dezembro';
            return months;

            default:
                months = '';
        }
        console.log(dia,months);
        }

        function zeroEsquerda(num){
            return num >= 10 ? num : `0${num}`;
        }

        const data = new Date();

        const monthOfYear = data.getMonth();
        const mes = getMonthYear(monthOfYear);
       
        const diaDaDate = data.getDay(); 
        const dayWeek = getDayWeek(diaDaDate);

        const dia = zeroEsquerda(data.getDate());
        const ano = data.getFullYear();
        const hora = data.getHours();
        const min = zeroEsquerda(data.getMinutes());
        const seg = zeroEsquerda(data.getSeconds());



        document.getElementById('resultado').innerHTML = `${dayWeek}, ${dia} de ${mes} de ${ano} às ${hora}:${min}:${seg}`;