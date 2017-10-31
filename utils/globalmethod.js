const gm={
    createTagsByIndex:function(index){
        let tagsmap={};
        let tagsList=[];
        for(let k in index){
            let idx=index[k];
            let tagname=idx.tag;
            if(!tagsmap[tagname]){
                tagsmap[tagname]=idx.category;
            } 
        }
        for(let k in tagsmap){
            tagsList.push({tag:k,category:tagsmap[k]});
        }
        tagsList.sort(function(a,b){return a.tag>b.tag});
        return tagsList;
    }
}
module.exports = gm;