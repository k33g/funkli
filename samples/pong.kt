import io.vertx.core.json.JsonObject

fun pong(): JsonObject {
  return JsonObject().put("result", "ping")
}

