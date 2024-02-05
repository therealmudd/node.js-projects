--cmd /c "sqlite3 .\database.sqlite < .\view-tables.sql"--

.headers on
.mode column
.separator |

SELECT * FROM Posts;
SELECT * FROM Users;
SELECT * FROM Comments;