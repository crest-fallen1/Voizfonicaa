import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
{ providedIn:'root'
})
export class ApiService {

  api_link:string='http://localhost:8000/';

  constructor(private http: HttpClient) { }

//READ
  getItems() {

    return this.http.get(this.api_link + 'api/list/');
  }



  getItems2() {

    return this.http.get(this.api_link + 'api/list2/');
  }

   getItems3() {

    return this.http.get(this.api_link + 'api/list3/');
  }

  pres(data:any)

{
return this.http.post(this.api_link+'api/list4/',data)
}

posts(data:any)

{
return this.http.post(this.api_link+'api/list5/',data)
}

dongles(data:any)

{
return this.http.post(this.api_link+'api/list6/',data)
}

preres(data:any)

{
return this.http.post(this.api_link+'api/list7/',data)
}

postres(data:any)

{
return this.http.post(this.api_link+'api/list8/',data)
}

dongleres(data:any)

{
return this.http.post(this.api_link+'api/list9/',data)
}

helpsv(data:any)

{
return this.http.post(this.api_link+'api/list10/',data)
}



  //UPDATE
  //DELETE
  //CREATE
}
