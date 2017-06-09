/*--- delete folder ---*/

ls                                  files list (file1 file2 folder1 folder2)
git rm -r --cached folder1          remove folder1 from github, not in local
git rm -r folder1                   remove folder1 from both directories
git commit -m 'remove folder1'      commit your changes
git push origin master              push your changes in master branch