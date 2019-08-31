// generate_rubbish.js

// define sample function to randomly return an item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// define generateRubbish function
function generateRubbish(options) {


  // define parameter
  const target = {
    engineer: '工程師',
    designer: '設計師',
    entrepreneur: '創業家'
  }

  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常', '還好']

  // if user does not choose a career
  if (!options.career) {
    return `請選擇一個職業！`
  }

  // start generating rubbish
  const finalTarget = target[options.career]
  const finalTask = sample(task[options.career])
  const finalPhrase = sample(phrase)

  // return the generated rubbish
  return `身為一個${finalTarget}，${finalTask}，${finalPhrase}吧？`
}

// export generateRubbish function for other files to use
module.exports = generateRubbish