let file = require('fs');
let text = require('./response.json');
let file_name = './output.txt';
function getMaxOfArray(obj) 
{
    let max = 0;
    let prev = 0;
    let key;
    for(key in obj)
    {
        prev = Number(obj[key]);
        if(prev > Number(max))
        {
            max = prev;
        }
    }
    return { key, max };
}

file.writeFileSync(file_name, 
                "Наименование товара: " + text.displayedName.displayedName.value[0] + '\n', (err) =>
                {
                    if(err)
                    {
                        throw err;
                    }
                });

let stocks_obj = text.stock.stocks[34];

file.appendFileSync(file_name, "\nМагазины, где есть товары в наличии:\n");

let paragraph = 1;

for(let key in stocks_obj)
{
    if(stocks_obj[key] != '0')
    {
        file.appendFileSync(file_name, paragraph + ') ' + stocks_obj[key] + '\n', (err)=>{
            if(err)
            {
                throw err;
            }
        });
        paragraph++;
    }
}


file.appendFileSync(file_name, "\nГде больше всего товара:\n");

let max = getMaxOfArray(stocks_obj);

file.appendFileSync(file_name, "Магазин: " + max.key + "\tОстаток: " + max.max + '\n');