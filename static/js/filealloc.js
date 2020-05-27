contFilesInDir = [];
contStartOfFile = [];
contLengthOfFile = [];
contDiskBlocks = [];

linkedFilesInDir = [];
linkedDiskBlocks = [];
linkedStartOfFile = [];
linkedEndOfFile = [];

function contAllocFunc()
{
  var fileName = document.getElementById("contAllocTF1").value;
  var fileSize = parseInt(document.getElementById("contAllocTF2").value);
  var i, j;
  var allocationSuccessful = false;
  if(fileName === "")
  {
    window.alert("Please enter a file name.");
    return;
  }
  if(fileSize < 1)
  {
    window.alert("Enter a file size greater than 0.");
    return;
  }
  for(i = 0; i < contFilesInDir.length; i++)
  {
    if(contFilesInDir[i] === fileName)
    {
      window.alert("File '" + fileName + "' already exists!");
      return;
    }
  }
  var startingIndexOfEmptyBlock = -1;
  for(i = 0; i < 32; i++)
  {
    if(contDiskBlocks[i] === 0)
    {
      startingIndexOfEmptyBlock = i;
      while(i < 32 && contDiskBlocks[i] === 0)
      {
        i++;
      }
      if(fileSize <= i - startingIndexOfEmptyBlock)
      {
        for(j = startingIndexOfEmptyBlock; j < startingIndexOfEmptyBlock + fileSize; j++)
				{
					contDiskBlocks[j] = 1;
				}
        allocationSuccessful = true;
        contFilesInDir[contFilesInDir.length] = fileName;
        contStartOfFile[contStartOfFile.length] = startingIndexOfEmptyBlock;
        contLengthOfFile[contLengthOfFile.length] = fileSize;
        window.alert("File '" + fileName + "' was allocated memory in disk from block " + startingIndexOfEmptyBlock + " to block " + (j - 1) + ".");
        document.getElementById("contAllocTF1").value = "";
        document.getElementById("contAllocTF2").value = "";
        return;
      }
    }
  }
  if(allocationSuccessful === false)
  {
    window.alert("File '" + fileName + "' couldn't be allocated any memory.\nTo free up memory, try deleting some files.");
    return;
  }
}


function contDeleteFunc()
{
  var fileName = document.getElementById("contAllocTF3").value;
  if(fileName === "")
  {
    window.alert("Please enter a file name.");
    return;
  }
  var i, j;
  for(i = 0; i < contFilesInDir.length; i++)
  {
    if(contFilesInDir[i] === fileName)
    {
      for(j = contStartOfFile[i]; j < contStartOfFile[i] + contLengthOfFile[i]; j++)
      {
        contDiskBlocks[j] = 0;
      }
      window.alert("File '" + fileName + "' deleted.\nDisk blocks from " + contStartOfFile[i] + " to " + (j - 1) + " freed.");
      contFilesInDir.splice(i, 1);
      contStartOfFile.splice(i, 1);
      contLengthOfFile.splice(i, 1);
      document.getElementById("contAllocTF3").value = "";
      return;
    }
  }
  if(i === contFilesInDir.length)
  {
    window.alert("File '" + fileName + "' not found.");
    return;
  }
}


function contDisplayDirFunc()
{
  var i;
  var str = "\nDirectory:\n\nFile" + "  -  " + "Start" + "  -  " + "Length\n";
  for(i = 0; i < contFilesInDir.length; i++)
  {
    str += (contFilesInDir[i] + "  -  " + contStartOfFile[i] + "  -  " + contLengthOfFile[i] + "\n");
  }
  window.alert(str);
  return;
}


function contDisplayDiskBlocksFunc()
{
  var i;
  var str = "Status of Disk Blocks:\n";
  for(i = 0; i < 32; i++)
  {
    str += "[" + i + "]: " + contDiskBlocks[i] + "  ";
  }
  window.alert(str);
  return;
}


function linkedAllocFunc()
{
  var fileName = document.getElementById("linkedAllocTF1").value;
  var fileSize = parseInt(document.getElementById("linkedAllocTF2").value);
  var i, j;
  if(fileName === "")
  {
    window.alert("Please enter a file name.");
    return;
  }
  if(fileSize < 1)
  {
    window.alert("Enter a file size greater than 0.");
    return;
  }
  for(i = 0; i < linkedFilesInDir.length; i++)
  {
    if(linkedFilesInDir[i] === fileName)
    {
      window.alert("File '" + fileName + "' already exists!");
      return;
    }
  }
  var freeBlockCount = 0;
  for(i = 0; i < linkedDiskBlocks.length; i++)
  {
    if(linkedDiskBlocks[i] === 0)
    {
      freeBlockCount++;
    }
  }
  if(freeBlockCount < fileSize)
  {
    window.alert("Not enough memory.\nTry deleting some files.");
    return;
  }
  var prevBlockNumber = -1;
  var startingBlock = -1;
  var endingBlock = -1;
  for(i = 1; i <= fileSize; i++)
  {
    for(j = 0; j < 32; j++)
    {
      if(linkedDiskBlocks[j] === 0)
      {
        if(prevBlockNumber === -1)
        {
          startingBlock = j;
          linkedDiskBlocks[j] = -1;
          endingBlock = j;
          prevBlockNumber = j;
        }
        else
        {
          linkedDiskBlocks[prevBlockNumber] = (j + 1);
          linkedDiskBlocks[j] = -1;
          endingBlock = j;
          prevBlockNumber = j;
        }
        break;
      }
    }
  }
  linkedFilesInDir[linkedFilesInDir.length] = fileName;
  linkedStartOfFile[linkedStartOfFile.length] = startingBlock;
  linkedEndOfFile[linkedEndOfFile.length] = endingBlock;
  window.alert("File '" + fileName + "' has been successfully allocated " + fileSize + " disk blocks.");
  document.getElementById("linkedAllocTF1").value = "";
  document.getElementById("linkedAllocTF2").value = "";
}


function linkedDeleteFunc()
{
  var fileName = document.getElementById("linkedAllocTF3").value;
  if(fileName === "")
  {
    window.alert("Please enter a file name.");
    return;
  }
  var i;
  for(i = 0; i < linkedFilesInDir.length; i++)
  {
    if(linkedFilesInDir[i] === fileName)
    {
      var currentBlockIndex = linkedStartOfFile[i];
      var blockToGoNext = linkedDiskBlocks[currentBlockIndex] - 1;
      linkedDiskBlocks[currentBlockIndex] = 0;
      while(blockToGoNext >= 0)
      {
        currentBlockIndex = blockToGoNext;
        var blockToGoNext = linkedDiskBlocks[currentBlockIndex] - 1;
        linkedDiskBlocks[currentBlockIndex] = 0;
      }
      window.alert("File '" + fileName + "' deleted.");
      linkedFilesInDir.splice(i, 1);
      linkedStartOfFile.splice(i, 1);
      linkedEndOfFile.splice(i, 1);
      document.getElementById("linkedAllocTF3").value = "";
      return;
    }
  }
  if(i === linkedFilesInDir.length)
  {
    window.alert("File " + fileName + " does not exist.");
    return;
  }
}


function linkedDisplayDirFunc()
{
  var i;
  var str = "\nDirectory:\n\nFile" + "  -  " + "Start" + "  -  " + "End\n";
  for(i = 0; i < linkedFilesInDir.length; i++)
  {
    str += (linkedFilesInDir[i] + "  -  " + linkedStartOfFile[i] + "  -  " + linkedEndOfFile[i] + "\n");
  }
  window.alert(str);
  return;
}


function linkedDisplayDiskBlocksFunc()
{
  var i;
  var str = "Status of Disk Blocks:\n";
  for(i = 0; i < 32; i++)
  {
    if(linkedDiskBlocks[i] === -1)
    {
      str += "["+ i + "]: Points to GND   ";
    }
    else if(linkedDiskBlocks[i] === 0)
    {
      str += "[" + i + "]: Empty   ";
    }
    else
    {
      str += "[" + i + "]: Points to " + (linkedDiskBlocks[i] - 1) + "   ";
    }
  }
  window.alert(str);
  return;
}


function init()
{
  var i;
  for(i = 0; i < 32; i++)
  {
    contDiskBlocks[i] = 0;
  }
  for(i = 0; i < 32; i++)
  {
    linkedDiskBlocks[i] = 0;
  }
  var contAllocBtn = document.getElementById("contAlloc");
  var contDeleteBtn = document.getElementById("contDelete");
  var contDisplayDirBtn = document.getElementById("contDisplayDir");
  var contDisplayDiskBlocksBtn = document.getElementById("contDisplayDiskBlocks");
  var linkedAllocBtn = document.getElementById("linkedAlloc");
  var linkedDeleteBtn = document.getElementById("linkedDelete");
  var linkedDisplayDirBtn = document.getElementById("linkedDisplayDir");
  var linkedDisplayDiskBlocksBtn = document.getElementById("linkedDisplayDiskBlocks");
  contAllocBtn.onclick = contAllocFunc;
  contDeleteBtn.onclick = contDeleteFunc;
  contDisplayDirBtn.onclick = contDisplayDirFunc;
  contDisplayDiskBlocksBtn.onclick = contDisplayDiskBlocksFunc;
  linkedAllocBtn.onclick = linkedAllocFunc;
  linkedDeleteBtn.onclick = linkedDeleteFunc;
  linkedDisplayDirBtn.onclick = linkedDisplayDirFunc;
  linkedDisplayDiskBlocksBtn.onclick = linkedDisplayDiskBlocksFunc;
}
document.addEventListener("DOMContentLoaded", init, true);
