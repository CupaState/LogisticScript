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

let stocks_arr = text.stock.stocks[34];

file.appendFileSync(file_name, "\nМагазины, где есть товары в наличии:\n");

let num = 1;

for(let key in stocks_arr)
{
    if(stocks_arr[key] != '0')
    {
        file.appendFileSync(file_name, num + ') ' + stocks_arr[key] + '\n', (err)=>{
            if(err)
            {
                throw err;
            }
        });
        num++;
    }
}


file.appendFileSync(file_name, "\nГде больше всего товара:\n");

let max = getMaxOfArray(stocks_arr);

file.appendFileSync(file_name, "Магазин: " + max.key + "\tОстаток: " + max.max + '\n');