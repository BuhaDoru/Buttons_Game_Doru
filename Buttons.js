       function chooseButon(id) {
          var randomNumber = Math.floor(Math.random(1) * 4);
          if (randomNumber == id) {
            document.getElementById("list").innerHTML += `
              <div class="card text-bg-success mb-3"">
                <div class="card-body">
                  <h5 class="card-title">WINNER!</h5>
                </div>
              </div>`;
          } else {
            document.getElementById("list").innerHTML += `
              <div class="card text-bg-danger mb-3">
              <div class="card-body">
                <h5 class="card-title">OH NO!</h5>
              </div>
            </div>`;
          }
        }
        function restart() {
          location.reload();
        }
