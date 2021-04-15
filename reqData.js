var request = require('request');
var f = require('fs');
var options = {
    'method': 'GET',
    'url': 'http://localhost:3001/api/approve-key',
    'headers': {
    }
};
request(options, (error, response) => {
    if (error) throw error;
    var data = JSON.parse(response.body);
    if (data["statusCode"] == 400) {
        console.log(data);
    }
    else {
        //   const filename = data["username"][3:5];
        let name_num_obj = [];
        for (let i = 3; i <= 5; i++) {
            name_num_obj[i - 3] = data["username"][i];
        }
        let name_num = name_num_obj.join(''); //เปลี่ยน string obj (String) เป็น string 
        let filename = data["username"] + ".txt"; // ชิอไฟล์
        let count_name = parseInt(name_num);
        let count = count_name + 5;
        let account = "";
        if (count <= 9) {
            account = "a00" + count.toString();
        }
        else if (count <= 99) {
            account = "a0" + count.toString();
        }
        else {
            account = "a" + count.toString();
        }

        // ดูผลลัพธ์
        console.log(data);
        console.log(data["username"]);
        console.log(name_num_obj);
        console.log(name_num);
        console.log(count_name);
        console.log(count);
        console.log(filename);
        console.log(account);

        // โครงสร้าง ไฟล์ที่เขียน ชื่อไฟล์เป็น username.txt
        // ชื่อไฟล์ psuxxx.txt
        // ชื่อ axxx
        // rsakey
        // flagserver

        const data_write = filename + "\n" + account + "\n" + data["rsakey"] + "\n" + data["flagserver"] + "\n";
        f.open(filename, 'a', (err, fd) => {
            if (err) throw err;
            f.appendFile(fd, data_write, 'utf8', (err) => {
                if (err) throw new err;
                f.close(fd, (err) => {
                    if (err) throw new err;
                });
            });
        });
    }

});