function(doc){
  if(doc.type == 'Post'){
    emit(doc._id, doc);
  }
}
