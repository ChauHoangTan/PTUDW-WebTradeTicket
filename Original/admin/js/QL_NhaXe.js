const addNhaxe = (req, res) => {
    const { tenNhaXe, diaChi, soDienThoai, email, hinhAnh } = req.body;
    const sql = `INSERT INTO NhaXe (tenNhaXe, diaChi, soDienThoai, email, hinhAnh) VALUES ('${tenNhaXe}', '${diaChi}', '${soDienThoai}', '${email}', '${hinhAnh}')`;
    connection.query(sql, (err, result) => {
        if(err) throw err;
        res.send(result);
    }
    )
}

const deleteNhaxe = (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM NhaXe WHERE id = ${id
    }`;
    connection.query(sql, (err, result) => {
        if(err) throw err;
        res.send(result);
    }
    )
}

const updateNhaxe = (req, res) => {
    const { id } = req.params;
    const { tenNhaXe, diaChi, soDienThoai, email, hinhAnh } = req.body;
    const sql = `UPDATE NhaXe SET tenNhaXe = '${tenNhaXe}', diaChi = '${diaChi}', soDienThoai = '${soDienThoai}', email = '${email}', hinhAnh = '${hinhAnh}' WHERE id = ${id
    }`;
    connection.query(sql, (err, result) => {
        if(err) throw err;
        res.send(result);
    }
    )
}