import connection from '@/handlers/sqlite3';

export default async function handler(req, res) {

    const sn = req.query.sn;
    const [results] = await connection.execute('SELECT Course.*, Course.TeacherSN AS CourseTeacherSN, Course.Name AS CourseName, user.Nickname, File.*, Domain.Name AS DomainName FROM Course JOIN user ON Course.TeacherSN = user.SN JOIN File ON Course.ThumbnailSN = File.SN JOIN Domain ON Course.DomainSN = Domain.SN ');



    res.status(200).json(results);
    

}