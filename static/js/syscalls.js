var fdExists = [];
var fileName = [];
var fdForFileName = [];
var fileMode = [];
var distinctFileName = [];
var contentOfFile = [];
var seek = [];

function creatFunc()
{
  //window.alert("Entered creat");
  var creatFileName = document.getElementById("creatTF1").value;
  for(name in fileName)
  {
    if(fileName[name] === creatFileName)
    {
      window.alert("File already exists!");
      return;
    }
  }
  var creatMode = document.getElementById("creatTF2").value;
  var i;
  for(i = 0; i < fdExists.length; i++)
  {
    if(fdExists[i] === false)
    {
      break;
    }
  }
  fdExists[i] = true;
  fileName[fileName.length] = creatFileName;
  fdForFileName[fdForFileName.length] = i;
  fileMode[fileMode.length] = creatMode;
  distinctFileName[distinctFileName.length] = creatFileName;
  contentOfFile[contentOfFile.length] = "";
  seek[seek.length] = 0;
  window.alert("File '" + creatFileName + "' created with fd = " + (i + 3));
  document.getElementById("creatTF1").value = "";
  document.getElementById("creatTF2").value = "";
}


function closeFunc()
{
  //window.alert("Entered close");
  var fdToBeClosed = document.getElementById("closeTF").value;
  if(fdToBeClosed < 3)
  {
    window.alert("File descriptor must be greater than or equal to 3.");
    return;
  }
  fdToBeClosed -= 3;
  if(fdToBeClosed >= fdExists.length)
  {
    window.alert("Entered file descriptor does not exist.");
    return;
  }
  if(fdExists[fdToBeClosed] === false)
  {
    window.alert("Entered file descriptor was already closed.");
    return;
  }
  fdExists[fdToBeClosed] = false;
  var i;
  for(i = 0; i < fdForFileName.length; i++)
  {
    if(fdForFileName[i] === fdToBeClosed)
    {
      fdForFileName[i] = -1;
    }
  }
  window.alert("File descriptor fd " + (fdToBeClosed + 3) + " closed.");
  document.getElementById("closeTF").value = "";
}


function openFunc()
{
  var openFileName = document.getElementById("openTF").value;
  var i;
  var flag = false;
  for(i = 0; i < fileName.length; i++)
  {
    if(fileName[i] === openFileName)
    {
      flag = true;
      break;
    }
  }
  if(flag === false)
  {
    window.alert("File does not exist!");
    return;
  }
  for(i = 0; i < fdExists.length; i++)
  {
    if(fdExists[i] === false)
    {
      break;
    }
  }
  fdExists[i] = true;
  fileName[fileName.length] = openFileName;
  fdForFileName[fdForFileName.length] = i;
  window.alert("File '" + openFileName + "' opened with fd = " + (i + 3) + ".");
  document.getElementById("openTF").value = "";
}


function writeFunc()
{
  var fdForWriting = document.getElementById("writeTF1").value;
  var stringToWrite = document.getElementById("writeTF2").value;
  var noOfChars = parseInt(document.getElementById("writeTF3").value);
  if(noOfChars < 0)
  {
    window.alert("Enter a nonzero number of characters!");
    return;
  }
  if(fdForWriting < 3)
  {
    window.alert("File descriptor must be greater than or equal to 3.");
    return;
  }
  fdForWriting -= 3;
  if(fdForWriting >= fdExists.length)
  {
    window.alert("Entered file descriptor does not exist.");
    return;
  }
  if(fdExists[fdForWriting] === false)
  {
    window.alert("Entered file descriptor was closed, hence unavailable.");
    return;
  }
  if(stringToWrite.length < noOfChars)
  {
    window.alert("No. of chars must be less than or equal to length of string.");
    return;
  }
  var i;
  for(i = 0; i < fdForFileName.length; i++)
  {
    if(fdForWriting === fdForFileName[i])
    {
      break;
    }
  }
  var j;
  for(j = 0; j < distinctFileName.length; j++)
  {
    if(distinctFileName[j] === fileName[i])
    {
      break;
    }
  }
  stringToWrite = stringToWrite.slice(0, noOfChars);
  var strA = contentOfFile[j].slice(0, seek[j]);
  var strB = contentOfFile[j].slice((seek[j] + stringToWrite.length), contentOfFile[j].length) ;
  contentOfFile[j] = strA + stringToWrite + strB;
  window.alert("String '" + stringToWrite +"' was written in '" + distinctFileName[j] + "' from index " + seek[j] + " to index " + (seek[j] + stringToWrite.length - 1) + ".");
  seek[j] += stringToWrite.length;
  document.getElementById("writeTF1").value = "";
  document.getElementById("writeTF2").value = "";
  document.getElementById("writeTF3").value = "";
}

function lseekFunc()
{
  var fdForSeeking = document.getElementById("lseekTF1").value;
  var position = parseInt(document.getElementById("lseekTF2").value);
  if(position < 0)
  {
    window.alert("Enter a nonzero position!");
    return;
  }
  if(fdForSeeking < 3)
  {
    window.alert("File descriptor must be greater than or equal to 3.");
    return;
  }
  fdForSeeking -= 3;
  if(fdForSeeking >= fdExists.length)
  {
    window.alert("Entered file descriptor does not exist.");
    return;
  }
  if(fdExists[fdForSeeking] === false)
  {
    window.alert("Entered file descriptor was closed, hence unavailable.");
    return;
  }
  var i;
  for(i = 0; i < fdForFileName.length; i++)
  {
    if(fdForSeeking === fdForFileName[i])
    {
      break;
    }
  }
  var j;
  for(j = 0; j < distinctFileName.length; j++)
  {
    if(distinctFileName[j] === fileName[i])
    {
      break;
    }
  }
  if(position > contentOfFile[j].length)
  {
    window.alert("This position is beyond length of content of this file,\nwhich is " + contentOfFile[j].length + ".");
    return;
  }
  seek[j] = position;
  window.alert("Offset of file '" + distinctFileName[j] + "' set to " + position + ".");
  document.getElementById("lseekTF1").value = "";
  document.getElementById("lseekTF2").value = "";
}


function readFunc()
{
  var fdForReading = document.getElementById("readTF1").value;
  var noOfChars = parseInt(document.getElementById("readTF2").value);
  if(noOfChars < 0)
  {
    window.alert("Enter a nonzero number of characters!");
    return;
  }
  if(fdForReading < 3)
  {
    window.alert("File descriptor must be greater than or equal to 3.");
    return;
  }
  fdForReading -= 3;
  if(fdForReading >= fdExists.length)
  {
    window.alert("Entered file descriptor does not exist.");
    return;
  }
  if(fdExists[fdForReading] === false)
  {
    window.alert("Entered file descriptor was closed, hence unavailable.");
    return;
  }
  var i;
  for(i = 0; i < fdForFileName.length; i++)
  {
    if(fdForReading === fdForFileName[i])
    {
      break;
    }
  }
  var j;
  for(j = 0; j < distinctFileName.length; j++)
  {
    if(distinctFileName[j] === fileName[i])
    {
      break;
    }
  }
  var outputStr = contentOfFile[j].slice(seek[j], seek[j] + noOfChars);
  window.alert("The following characters were read from '" + distinctFileName[j] + "':\n\n" + outputStr + "\n\nNo. of characters actually read = " + outputStr.length + ".");
  seek[j] = (seek[j] + noOfChars) < contentOfFile[j].length ? (seek[j] + noOfChars) : contentOfFile[j].length;
  document.getElementById("readTF1").value = "";
  document.getElementById("readTF2").value = "";
}


function dupFunc()
{
  var fdToBeDuplicated = document.getElementById("dupTF").value;
  if(fdToBeDuplicated < 3)
  {
    window.alert("File descriptor must be greater than or equal to 3.");
    return;
  }
  fdToBeDuplicated -= 3;
  if(fdToBeDuplicated >= fdExists.length)
  {
    window.alert("Entered file descriptor does not exist.");
    return;
  }
  if(fdExists[fdToBeDuplicated] === false)
  {
    window.alert("Entered file descriptor was already closed.");
    return;
  }
  var i;
  for(i = 0; i < fdExists.length; i++)
  {
    if(fdExists[i] === false)
    {
      break;
    }
  }
  fdExists[i] = true;
  var j;
  for(j = 0; j < fdForFileName.length; j++)
  {
    if(fdForFileName[j] === fdToBeDuplicated)
    {
      fileName[fileName.length] = fileName[j];
      fdForFileName[fdForFileName.length] = i;
      window.alert("File '" + fileName[j] + "' now has additional file descriptor "+ (i + 3) + ".");
    }
  }
  document.getElementById("dupTF").value = "";
}


function chmodFunc()
{
  var chmodFileName = document.getElementById("chmodTF1").value;
  var chmodMode = document.getElementById("chmodTF2").value;
  var i;
  var flag = false;
  for(i = 0; i < distinctFileName.length; i++)
  {
    if(distinctFileName[i] === chmodFileName)
    {
      flag = true;
      break;
    }
  }
  if(flag === false)
  {
    window.alert("File '" + chmodFileName + "' does not exist!");
    return;
  }
  window.alert("File mode of '" + distinctFileName[i] + "' changed from " + fileMode[i] + " to " + chmodMode + ".");
  fileMode[i] = chmodMode;
  document.getElementById("chmodTF1").value = "";
  document.getElementById("chmodTF2").value = "";
}


function init()
{
  var creatBtn = document.getElementById("creat");
  var closeBtn = document.getElementById("close");
  var openBtn = document.getElementById("open");
  var writeBtn = document.getElementById("write");
  var lseekBtn = document.getElementById("lseek");
  var readBtn = document.getElementById("read");
  var dupBtn = document.getElementById("dup");
  var chmodBtn = document.getElementById("chmod");
  creatBtn.onclick = creatFunc;
  closeBtn.onclick = closeFunc;
  openBtn.onclick = openFunc;
  writeBtn.onclick = writeFunc;
  lseekBtn.onclick = lseekFunc;
  readBtn.onclick = readFunc;
  dupBtn.onclick = dupFunc;
  chmodBtn.onclick = chmodFunc;
}
document.addEventListener("DOMContentLoaded", init, true);
