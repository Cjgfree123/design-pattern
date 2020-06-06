// 例1

/*
有个服装厂，生产了男女服装各50种款式，为了推销需要找模特来拍照，
正常可能会找男女模特各50个，每个模特分别穿一种服装拍一组照片。
*/

// 模特类

class Model {
  constructor (name, gender, clothes) {
    this.array = new Array(2000*1024*1024)
    this.name = name
    this.gender = gender
    this.clothes = clothes
  }

  takePhoto () {
    console.log(`${this.gender}模特${this.name}穿${this.clothes}拍了张照`)
  }
}

// 穿衣拍照实现
for (let i = 0; i < 50; i++) {
  let manModel = new Model(`张${i}`, '男', `服装${i}`)
  manModel.takePhoto()
}

for (let i = 50; i < 1000000; i++) {
  let womanModel = new Model(`李${i}`, '女', `服装${i}`)
  womanModel.takePhoto()
}

// 本例中创建了100个模特对象,如果衣服种类无休止的增长下去，那么模特对象的数量也会增长下去，当对象多到一定数量程序必然会崩溃。

/*----------------------------------------------------------------------------------*/
// 构建享元对象
class Model {
  constructor (id, gender) {
    this.gender = gender
    this.name = `张${gender}${id}`
  }
}

// 构建享元工厂
class ModelFactory {
  // 单例模式
  static create (id, gender) {
    if (this[gender]) {
      return this[gender]
    }
    return this[gender] = new Model(id, gender)
  }
}

// 管理外部状态
class TakeClothesManager {
  // 添加衣服款式
  static addClothes (id, gender, clothes) {
    const model = ModelFactory.create(id, gender)
    this[id] = {
      clothes,  // 外部属性
      model  // 内部属性
    }
  }
  // 拍照
  static takePhoto (id) {
    const obj = this[id]
    console.log(`${obj.model.gender}模特${obj.model.name}穿${obj.clothes}拍了张照`)
  }
}

// 执行
for (let i = 0; i < 50; i++) {
  TakeClothesManager.addClothes(i, '男', `服装${i}`)
  TakeClothesManager.takePhoto(i)
}

for (let i = 50; i < 100; i++) {
  TakeClothesManager.addClothes(i, '女', `服装${i}`)
  TakeClothesManager.takePhoto(i)
}


/*----------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------*/
// 例2

// 完整的享元的例子：文件上传

// 构造Upload对象，包含内部状态uploadType和一个delFile方法
var Upload = function (uploadType) {
  this.uploadType = uploadType

  this.delFile = function (id) {
    uploadManager.setExternalState(id, this)
    if (this.fileSize < 3000) {
      return this.dom.parentNode.removeChild(this.dom)
    }
    if (window.confirm('确定要删除文件吗？' + this.fileName)) {
      return this.dom.parentNode.removeChild(this.dom)
    }
  }
}

// 构造上传工厂来创建upload对象
var UploadFactory = (function () {
  var createdFlyWeightObjs = {}
  return {
    create: function (uploadType) {
      if (createdFlyWeightObjs[uploadType]) {
        return createdFlyWeightObjs[uploadType]
      }
      return createdFlyWeightObjs[uploadType] = new Upload(uploadType)
    }
  }
})()

// 上传管理器，负责向UploadFactory提交对象创建申请，并保存所有upload对象的外部状态到uploadData
var uploadManager = (function () {
  var uploadDatabase = {}
  return {
    add: function (id, uploadType, fileName, fileSize) {
      var flyWeightObj = UploadFactory.create(uploadType)
      var dom = document.createElement('div')
      dom.innerHTML = '<span>文件名称:' + fileName + ', 文件大小: ' + fileSize + '</span>' +
        '<button class="delFile">删除</button>'
      dom.querySelector('.delFile').onclick = function () {
        flyWeightObj.delFile(id)
      }
      document.body.appendChild(dom)
      uploadDatabase[id] = {
        fileName: fileName,
        fileSize: fileSize,
        dom: dom
      }
      return flyWeightObj
    },
    setExternalState: function (id, flyWeightObj) {
      var uploadData = uploadDatabase[id]
      for (var i in uploadData) {
        flyWeightObj[i] = uploadData[i]
      }
    }
  }
})()
var id = 0
// startUpload上传函数，调用uploadManager
window.startUpload = function (uploadType, files) {
  for (var i = 0, file; file = files[i++];) {
    var uploadObj = uploadManager.add(++this.id, uploadType, file.fileName, file.fileSize)
  }
}